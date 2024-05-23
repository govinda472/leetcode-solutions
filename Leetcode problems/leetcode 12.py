class Solution:
    def intToRoman(self, num: int) -> str:
        rom=""
        while num>0:
            if num>=1000:
                rom+="M"
                num=num-1000
            elif 900<=num<1000:
                rom+="CM"
                num=num-900
            elif 500<=num<900:
                rom+="D"
                num=num-500
            elif 400<=num<500:
                rom+="CD"
                num=num-400
            elif 100<=num<400:
                rom+="C"
                num=num-100
            elif 90<=num<100:
                rom+="XC"
                num=num-90
            elif 50<=num<90:
                rom+="L"
                num=num-50
            elif 40<=num<50:
                rom+="XL"
                num=num-40
            elif 10<=num<40:
                rom+="X"
                num=num-10
            elif 9<=num<10:
                rom+="IX"
                num=num-9
            elif 5<=num<9:
                rom+="V"
                num=num-5
            elif 4<=num<5:
                rom+="IV"
                num=num-4
            else:
                rom+="I"
                num=num-1
        return rom
            

            
            
