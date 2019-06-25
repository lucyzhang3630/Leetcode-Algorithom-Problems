// Given a non-empty string like "Code" return a string like "CCoCodCode".
//
// stringSplosion("Code") → "CCoCodCode"
// stringSplosion("abc") → "aababc"
// stringSplosion("ab") → "aab"

public String stringSplosion(String str) {
  int l = str.length();
  String result = new String ();
  String temp   = new String ();
  for(int i = 0;i < l;i++){
    temp = temp.concat(String.valueOf(str.charAt(i)));
    result = result.concat(temp);
  }
  return result;
}
