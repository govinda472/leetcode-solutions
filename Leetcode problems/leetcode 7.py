#solution 1 using string method
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
#solution2 using numbers
class Solution:
    def reverse(self, x: int) -> int:
        r=0
        sign=1
        if x<0:
            x=x*-1
            sign=-1
        while x>0:
            curr=x%10
            r=r*10+curr
            x=(x-curr)//10
        if r>(2**31)-1 or r<-(2**31):
            return 0
        else:
            return sign*r
