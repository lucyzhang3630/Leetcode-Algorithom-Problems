// Consider the leftmost and righmost appearances of some value in an array.
//  We'll say that the "span" is the number of elements between the two inclusive.
//  A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)
//
//
// maxSpan([1, 2, 1, 1, 3]) → 4
// maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
// maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6
//
// Method used : two pointer
public int maxSpan(int[] nums) {
  int length = nums.length;
  int span = 0;
  int temp = 0;
  if (length == 1 ||length == 0){
    return length;
  }else{
    for(int i = 0; i<length;i++){
      int j = length - 1;
      while(nums[j]!=nums[i]){
        j--;
      };
      temp = j-i+1;
      if(temp>span){
        span = temp;
      }
    }
    return span;
  }
}
