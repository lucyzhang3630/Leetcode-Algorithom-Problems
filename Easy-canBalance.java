// Given a non-empty array, return true if there is a place to split the array so that the sum 
// of the numbers on one side is equal to the sum of the numbers on the other side.
//
// canBalance([1, 1, 1, 2, 1]) → true
// canBalance([2, 1, 1, 2, 1]) → false
// canBalance([10, 10]) → true

public boolean canBalance(int[] nums) {
  //loop from beginning to end, calculate the sum of left side and right side at the same time
  //return true if it is equal
  int sum = 0;
  int leftSum = 0;
  for(int val:nums){
    sum+=val;
  }
  if(sum%2!=0){
    return false;
  }else{
    for(int num:nums){
      leftSum+=num;
      if(leftSum == sum/2){
        return true;
      }
    }
    return false;
  }
}
