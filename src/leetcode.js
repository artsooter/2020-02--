
  //链表题目数据
  function Tnode(x){
    this.val = x;
    this.right = null;
    this.left = null;
  }
  let p=new Tnode(1);
  p.right=new Tnode(2);
  p.right.right=new Tnode(9);
  p.right.left=new Tnode(4);
  p.left=new Tnode(6);
  p.left.right=new Tnode(5);
  p.left.left=new Tnode(15);
  p.left.left.left=new Tnode(100);
  p.left.left.right=new Tnode(111);


export  function leetcode(){
    let nums=[3,2,4]
    let target=6;
    let ans;
    nums.forEach((n,index)=>{
        if(nums.indexOf(target-n)!=-1){
            if(nums.lastIndexOf(target-n)!=index){
                ans= [nums.lastIndexOf(target-n),index]
                
            }
        }
    })
    return ans;
    
}