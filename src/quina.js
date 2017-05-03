module.exports = function(n){
  q = [];
  for(var i=0; i<n; i++) {
    q[i] = Math.round(Math.random()*80 + 1);
  }
  this.dozens = q.sort(function(a, b){return a-b});

  this.sum = function(){
    result = 0
    for(var i=0; i<this.dozens.length; i++){
      result+= this.dozens[i];
    }
    return result;
  }
}
