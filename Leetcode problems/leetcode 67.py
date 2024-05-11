class Solution:
    def addBinary(self, a: str, b: str) -> str:
        l1=len(a)
        a2=a
        b2=b
        l2=len(b)
        val=""
        if l2>l1:
            for i in range(l2-l1):
                a2="0"+a2
        if l2<l1:
            for i in range(l1-l2):
                b2="0"+b2
        count=len(a2)-1
        carry=0
        while count>=0:
            if (int(b2[count])+int(a2[count])+carry)==0:
                val="0"+val
                carry=0
            elif (int(b2[count])+int(a2[count])+carry)==1:
                val="1"+val
                carry=0
            elif (int(b2[count])+int(a2[count])+carry)==2:
                val="0"+val
                carry=1
            elif (int(b2[count])+int(a2[count])+carry)==3:
                val="1"+val
                carry=1
            count=count-1
        if carry==1:
            return "1"+val
        else:
            return val
