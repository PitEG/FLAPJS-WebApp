import { solveDFA } from 'machine/util/solveDFA.js';
import { solveNFA, solveNFAbyStep } from 'machine/util/solveNFA.js';

import { DFA } from 'machine/DFA.js';

class TestMode
{
  constructor(machineBuilder, testingManager)
  {
    this.machineBuilder = machineBuilder;
    this.targets = [];

    this.history = [];
    this.indexofString = -1;
    this.testingManager = testingManager;
    this.result = false;

    //for nfa use
    this.cachedStates = [];
    this.cachedSymbols = [];
    this.checkedStates = [];
    this.running = false;
    this.started = false;

    this.timer = null;
  }

  onStart()
  {
    //Check the machine, if DFA, then it must be a valid DFA
    /*if (this.machineBuilder.getMachineType() == "DFA")
    {
      const dfa = this.machineBuilder.toDFA();
      if (!dfa.validate()) return;
    }*/
    this.prepareForNewTest();
    this.started = true;
  }

  onResume()
  {
    //If at the end, restart!
    if (!this.hasNextStep())
    {
      this.testingManager.inputList.resetTests(false);
    }

    this.running = true;

    const STEPTIME = 500;
    const step = () => {
      if (this.running)
      {
        if (this.hasNextStep())
        {
          this.onNextStep();
          this.timer = setTimeout(step, STEPTIME);
        }
        else
        {
          this.onPause();
        }
      }
      else
      {
        console.log("Finished tests...");
      }
    };
    this.timer = setTimeout(step, STEPTIME);
  }

  onPause()
  {
    this.running = false;
  }

  onStop()
  {
    this.targets.length = 0;

    this.started = false;
  }

  isRunning()
  {
    return this.running;
  }

  isStarted()
  {
    return this.started;
  }

  hasPrevStep()
  {
    return this.history.length > 0 ||
      this.testingManager.inputList.hasPrevInput();
  }

  onPreviousStep()
  {
    console.log(this.history[1])
    if (this.history.length > 0)
    {
      const previous = this.history.pop();
      this.targets.length = 0;
      this.cachedStates.length = 0;
      this.cachedSymbols.length = 0;
      this.checkedStates.length = 0;

      //Copy the old step
      for(const target of previous.targets)
      {
        this.targets.push(target);
      }
      for(const state of previous.cachedStates)
      {
        this.cachedStates.push(state);
      }
      for(const symbol of previous.cachedSymbols)
      {
        this.cachedSymbols.push(symbol);
      }
      for(const state of previous.checkedStates)
      {
        this.checkedStates.push(state);
      }

      this.indexofString--;
    }
    else
    {
      this.indexofString = -1;
      this.testingManager.inputList.prevInput();
    }
  }

  hasNextStep()
  {
    return this.indexofString < this.testingManager.inputList.getCurrentInput().value.length ||
      this.testingManager.inputList.hasNextInput();
  }

  onNextStep()
  {
    const testInput = this.testingManager.inputList.getCurrentInput();
    const fsa = this.machineBuilder.getMachine();

    //Get next character of current test string
    console.log("Getting next character....");
    this.indexofString += 1;

    //If no more characters to get...
    if(this.indexofString >= testInput.value.length)
    {
      //End of test string
      console.log("...end of test string...");

      //Run it one more time...
      this.result = solveNFAbyStep(fsa, null, this.cachedStates, this.cachedSymbols, this.checkedStates);
      testInput.setResult(this.result);

      //If this is the last test input...
      if (!this.testingManager.inputList.hasNextInput())
      {
        //End of test!
        console.log("= End of test =");
        this.onPause();
        return false;
      }
      else
      {
        const result = this.testingManager.inputList.nextInput();
        console.log("...setting up for another test...");
        console.log(JSON.stringify(this.testingManager.inputList.getCurrentInput()));

        //Stop the resume at each string
        //this.running = false;

        this.prepareForNewTest();
        return true;
      }
    }
    else
    {
      //Update history
      console.log(JSON.stringify(this.targets));
      const currentStep = this.getCurrentCache();
      this.history.push(currentStep);
      console.log(JSON.stringify(this.history[this.history.length - 1]));

      //Run it
      let nextChar = testInput.value[this.indexofString];
      console.log("The next character (should never be null): " + nextChar);

      this.result = solveNFAbyStep(fsa, nextChar, this.cachedStates, this.cachedSymbols, this.checkedStates);

      //Update targets
      this.targets.length = 0;
      console.log(this.cachedStates)
      for(const state of this.cachedStates)
      {
        this.targets.push(this.machineBuilder.graph.getNodeByLabel(state.state));
      }
      console.log("For that character, the next state is: " + JSON.stringify(this.cachedStates));

      console.log("Have we reached the end? " + this.result);
      return true;
    }
  }

  getCurrentCache()
  {
    return {
      targets: this.targets.slice(),
      cachedStates: this.cachedStates.slice(),
      cachedSymbols: this.cachedSymbols.slice(),
      checkedStates: this.checkedStates.slice()
    };
  }

  getCurrentTestStringIndex()
  {
    return this.indexofString + 1;
  }

  prepareForNewTest()
  {
    const startState = this.machineBuilder.getMachine().getStartState();
    const startNode = this.machineBuilder.graph.getStartNode();
    this.cachedStates.length = 0;
    this.cachedSymbols.length = 0;
    this.checkedStates.length = 0;
    this.cachedStates.push({state: startState, index: 0});
    this.targets.length = 0;
    this.targets.push(startNode);
    this.indexofString = -1;

    this.history.length = 0;
  }
}

export default TestMode;
