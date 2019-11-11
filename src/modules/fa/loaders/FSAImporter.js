import SessionImporter from '@flapjs/session/helper/SessionImporter.js';

/**
 * A class that represents a session importer for the FSA module.
 */
class FSAImporter extends SessionImporter
{
    constructor(jsonGraphParser, fileTypes = [])
    {
        super();

        this._graphParser = jsonGraphParser;
        this._prevGraphHash = 0;

        this._fileTypes = fileTypes;
    }

    /** @override */
    onParseSession(session, fileData)
    {
        return JSON.parse(fileData);
    }

    /** @override */
    onPreImportSession(session)
    {
        const graphController = session.graphController;
        const graph = graphController.getGraph();
        this._prevGraphHash = graph.getHashCode(true);

        // TODO: this should not be here, this should exist somewhere in graphController
        if (!graph.isEmpty())
        {
            session.undoManager.captureEvent();
        }
    }

    /** @override */
    onImportSession(session, sessionData)
    {
        const graphController = session.graphController;
        const machineController = session.machineController;
        const graph = graphController.getGraph();

        this._graphParser.parse(sessionData['graphData'], graph);

        loadMachineFromData(graphController, machineController, sessionData['machineData']);
    }

    /** @override */
    onPostImportSession(session)
    {
        const graphController = session.graphController;
        const graph = graphController.getGraph();

        // Compares the graph hash before and after import, captures event if they are not equal
        const nextGraphHash = graph.getHashCode(true);
        if (this._prevGraphHash !== nextGraphHash)
        {
            // TODO: this should not be here
            session.undoManager.captureEvent();
        }
    }

    /** @override */
    getFileTypes()
    {
        return this._fileTypes;
    }
}

/**
 * Sets all of the details pertaining to the module (and the machine).
 *
 * @private
 * @param  {GraphController} graphController        The controller for the graph to be constructed.
 * @param  {MachineController} machineController    The controller for the machine to be constructed.
 * @param  {object} machineData                     The machine data to be parsed.
 */
export function loadMachineFromData(graphController, machineController, machineData)
{
    const machineType = machineData.type;
    if (machineType) machineController.setMachineType(machineType);
    const customSymbols = machineData.symbols;
    if (customSymbols && Array.isArray(customSymbols))
    {
        machineController.clearCustomSymbols();
        for (const symbol of customSymbols)
        {
            machineController.addCustomSymbol(symbol);
        }
    }

    if (graphController)
    {
        const statePrefix = machineData.statePrefix;
        if (statePrefix)
        {
            graphController.getGraphLabeler().setDefaultNodeLabelPrefix(statePrefix);
        }
    }
}

export default FSAImporter;