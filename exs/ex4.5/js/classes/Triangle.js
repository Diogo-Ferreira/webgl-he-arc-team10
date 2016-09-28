class Triangle extends AbstractObject {

  constructor(points,whiteness){
    super();
    this.a = points.a;
    this.b = points.b;
    this.c = points.c;
    this.white = whiteness;
    this.zRot = 0;
    this._calculateVertices();
  }



  _calculateVertices(){
    this.vertices = [];
    this.vertices.push(this.a.x, this.a.y, this.a.z);
    this.vertices.push(this.b.x, this.b.y, this.b.z);
    this.vertices.push(this.c.x, this.c.y, this.c.z);

    this.colors = [];

    /*this.colors.concat(this.color);
    this.colors.concat(this.color);
    this.colors.concat(this.color);*/
    this.colors.push(this.white,this.white,1.0,1.0);
    this.colors.push(this.white,this.white,1.0,1.0);
    this.colors.push(this.white,this.white,1.0,1.0);

    this.indices = [];
    this.indices.push(0,1,2);

    this.vertexBuffer = getVertexBufferWithVertices(this.vertices);
    this.colorBuffer  = getVertexBufferWithVertices(this.colors);
    this.indexBuffer  = getIndexBufferWithIndices(this.indices);
  }

  rotateZ(radValue){
    this.zRot += radValue;
  }


  draw(GL){
    //mat4.rotateZ(mvMatrix,mvMatrix,this.zRot);

    glContext.bindBuffer(glContext.ARRAY_BUFFER, this.vertexBuffer);
    glContext.vertexAttribPointer(prg.vertexPositionAttribute, 3, glContext.FLOAT, false, 0, 0);

    glContext.bindBuffer(glContext.ARRAY_BUFFER, this.colorBuffer);
    glContext.vertexAttribPointer(prg.colorAttribute, 4, glContext.FLOAT, false, 0, 0);

    glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    glContext.drawElements(glContext.TRIANGLE_STRIP, this.indices.length, glContext.UNSIGNED_SHORT,0);
  }


}
