class Solution:
    def reverse(self, x: int) -> int:
        s=str(x)
        count=len(s)-1
        rev=""
        start=0
        if s[0]=="-":
            rev=rev+"-"
            start=1
        while s[count]=='0' and count>=0:
            count=count-1
        inv=""
        for i in range(start,count+1):
            inv=s[i]+inv
        try:
            val=int(rev+inv)
            if val>(2**31)-1 or val<-(2**31):
                return 0
            return int(rev+inv)
        except:
            return 0
