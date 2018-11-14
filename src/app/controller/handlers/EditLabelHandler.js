class EditLabelHandler
{
  constructor(controller)
  {
    this.controller = controller;
  }

  onActionEvent(pointer)
  {
    const controller = this.controller;
    const x = pointer.x;
    const y = pointer.y;
    const target = pointer.getPicker().initialTarget;
    const targetType = pointer.getPicker().initialTargetType;

    //If selected target...
    if (targetType === 'edge')
    {
      //Edit label for selected edge
      controller.openLabelEditor(target, x, y);
      return true;
    }
    else
    {
      return false;
    }
  }
}

export default EditLabelHandler;
