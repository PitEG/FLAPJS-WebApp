import { EMPTY } from 'modules/re/machine/RE.js';


/**
 * A function for checking in polynomial time if an inputString can be derived from
 * a CFG that is in Chomsky Normal Form (CNF). It is based off the CYK algorithm (dynamic programming)
 * https://en.wikipedia.org/wiki/CYK_algorithm
 *
 * @param {CFG} CFG in Chomsky Normal Form to check derivation of inputString
 * @param {String} String to test accept or reject by CFG
 * @returns {Boolean} True if inputString can be derived by CNF, false otherwise
 */
export function solveChomsky(cnf, inputString)
{
    const length = inputString.length;              // n
    const varCount = cnf.getVariables().size;       // r
    const varMap = getVarMap(cnf);                  // Map variables to increasing numbers, Start variable = 0
    const terminalIndicies = getTerminalIndicies(inputString); // Map each terminal to a list of indicies they appear in inputString
    const parseTable = [];

    //Empty strings should have the S->EMPTY rule, so don't waste time with the parse table
    if(length == 0 || inputString === EMPTY)
    {
        return checkEmptyString(cnf);
    }

    //Initialize a P[n, n, r] to false. For any substring of length l, starting at index s,
    //successfuly generated from CNF variable_r, set P[l - 1, s, r] to true
    for(let i = 0; i < length; i++)
    {
        let perStartIndex = [];
        for(let j = 0; j < length; j++)
        {
            let perVariable = [];
            for(let k = 0; k < varCount; k++)
            {
                perVariable.push(false);
            }
            perStartIndex.push(perVariable);
        }
        parseTable.push(perStartIndex);
    }

    //Set all unit productions of R_v -> a_s from input string a_0a_1...a_l-1
    // parseTable[0][s][v] = true
    //Basically, any character in the input string that has a unit production for it should
    //note that for a length 1 string (itself), it can be generated by some variables
    const unitProductions = getUnitProductions(cnf, varMap);
    for(const termToIndicies of terminalIndicies.entries())
    {
        let terminal = termToIndicies[0];
        let indicies = termToIndicies[1];

        for(const unitProduction of unitProductions)
        {
            let stringLen = 0;                      //Length of 1 in 0 based indexing
            let variableNum = unitProduction[0];
            if(terminal == unitProduction[1])
            {
                for(const index of indicies)
                {
                    parseTable[stringLen][index][variableNum] = true;
                }
            }
        }
    }

    const doubleVariableProductionTuples = getDoubleVariableProductionTriTuple(cnf, varMap);

    // Test substrings of length 2 up to the entire length, building up through
    // tabulated information saved from smaller lengths (dynamic programming)
    for(let stringLen = 2; stringLen <= length; stringLen++)
    {
        for(let spanStart = 1; spanStart <= length - stringLen + 1; spanStart++)
        {
            for(let partition = 1; partition <= stringLen - 1; partition++)
            {
                for(const tuple of doubleVariableProductionTuples)
                {
                    // A -> BC
                    let A = 0; let B = 1; let C = 2;
                    if(parseTable[ partition - 1 ][ spanStart - 1][ tuple[B] ] &&
                        parseTable[ stringLen - partition - 1 ][ spanStart + partition - 1][ tuple[C] ])
                    {
                        parseTable[ stringLen - 1 ][ spanStart - 1 ][ tuple[A] ] = true;
                    }
                }
            }
        }
    }

    //After everything, whether the inputString is accepted or not should be stored in
    //the parse table at the entire substring length, starting at index 0, starting from the Start Variable
    if(parseTable[ length - 1 ][0][0])
    {
        return true;
    }
    else
    {
        return false;
    }

}


/**
 * Checks if within the CNF if there is the S->EMPTY rule for empty strings
 *
 * @param {CFG} CFG in Chomsky Normal Form to check for S->EMPTY rules
 * @returns {Boolean} True if S->EMPTY rule exists, else false
 */
function checkEmptyString(cnf)
{
    const startVariable = cnf.getStartVariable();
    const rules = cnf.getRules();

    for(const rule of rules)
    {
        if(rule.getLHS() == startVariable && rule.getRHS() == EMPTY)
        {
            return true;
        }
    }
    return false;
}


/**
 * Returns a map of variables -> number, where the start variable is 0 and
 * subsequent variables are 1, 2, 3, ...etc
 *
 * @param {CFG} CFG in Chomsky Normal Form to number variables
 * @returns {Map} Maps CNF variables to numbers in increasing order
 */
function getVarMap(cnf)
{
    const startVariable = cnf.getStartVariable();
    const variables = cnf.getVariables();
    const varMap = new Map();

    varMap.set(startVariable, 0);

    let counter = 1;
    for(const variable of variables)
    {
        if(variable !== startVariable && !varMap.has(variable))
        {
            varMap.set(variable, counter++);
        }
    }

    return varMap;
}


/**
 * Returns a map of input string terminals -> [Indicies they appear in inputString]
 * e.g. inputString 1001  => {1: [0, 3], 0: [1, 2]}
 *
 * @param {String} inputString to check terminals of
 * @returns {Map} input string terminals -> [Indicies they appear in inputString]
 */
function getTerminalIndicies(inputString)
{
    const terminalIndicies = new Map();

    for(let i = 0 ; i < inputString.length; i++)
    {
        let c = inputString.charAt(i);
        if(terminalIndicies.has(c))
        {
            let updatedList = terminalIndicies.get(c);
            updatedList.push(i);
            terminalIndicies.set(c, updatedList);
        }
        else
        {
            terminalIndicies.set(c, [i]);
        }
    }

    return terminalIndicies;
}


/**
 * For all unit productions (variable -> terminal), returns a list of pairs of
 * [varNum, terminal]
 * e.g. varMap: {S:0, A:1}  rules: {S->SA, S->x, A->y}
 *  => [ [0, x], [1, y] ]
 *
 * @param {CFG} CFG in Chomsky Normal Form to number variables
 * @param {Map} Map of variables to their numbers
 * @returns {List} List of [varNum, terminal] pairs for all unit productions
 */
function getUnitProductions(cnf, varMap)
{
    const rules = cnf.getRules();
    const terminals = cnf.getTerminals();
    const unitProductions = [];

    for(let i = 0 ; i < rules.length; i++)
    {
        const rhs = rules[i].getRHS();
        const variable = rules[i].getLHS();

        //Is this rule a unit production (Var -> Terminal)
        if(rhs.length == 1 && terminals.has(rhs))
        {
            unitProductions.push( [varMap.get(variable), rhs] );
        }
    }

    return unitProductions;
}


/**
 * For all A->BC rules, returns (varMap(A), varMap(B), varMap(C))
 * e.g. varMap: {S:0, A:1, B:2}  rules: {S->AB, S->x, B->y, A->SA, A->z}
 *  => [ [0, 1, 2], [1, 0, 1] ]
 *
 * @param {CFG} CFG in Chomsky Normal Form to number variables
 * @param {Map} Map of variables to their numbers
 * @returns {List} List of (varMap(A), varMap(B), varMap(C)) triples for all A->BC
 */
function getDoubleVariableProductionTriTuple(cnf, varMap)
{
    const rules = cnf.getRules();
    const tuples = [];

    for(const rule of rules)
    {
        const rhs = rule.getRHS();
        // Is this rule in the form of A->BC
        if( rhs.length == 2 && cnf.hasVariable(rhs.charAt(0)) && cnf.hasVariable(rhs.charAt(1)) )
        {
            let A = varMap.get(rule.getLHS());
            let B = varMap.get(rhs.charAt(0));
            let C = varMap.get(rhs.charAt(1));
            tuples.push([A, B, C]);
        }
    }

    return tuples;
}


/*
function printParseTable(parseTable, length, varCount)
{
    let output = "";
    for(let i = 0; i < length; i++)
    {
        let lengthString = "Len: " + i + "\n";
        for(let j = 0; j < length; j++)
        {
            let startIndexString = "\tSInd: " + j + "[";
            for(let k = 0; k < varCount; k++)
            {
                startIndexString += " " +  parseTable[i][j][k] + " ";
            }
            startIndexString += "]\n";
            lengthString += startIndexString;
        }
        output += lengthString;
    }
    console.log(output);
}
*/
