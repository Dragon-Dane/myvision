import fabric from 'fabric';

function setBoundingBoxEditToolsToBeTransparent() {
  fabric.Object.prototype.transparentCorners = false;
}

function createNewCanvas() {
  return new fabric.Canvas('c', { selection: false });
}

export { setBoundingBoxEditToolsToBeTransparent, createNewCanvas };