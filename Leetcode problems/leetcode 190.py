class Solution:
    def reverseBits(self, n: int) -> int:
        binar=str(bin(n).replace("0b", ""))
        val=0
        count=len(binar)-1
        i=0
        while count>=0:
            if binar[count]=="1":
                val=val+pow(2, 31-i)
            i=i+1
            count=count-1
        return val
       
