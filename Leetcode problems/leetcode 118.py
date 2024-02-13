class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows==1:
            return [[1]]
        lis=[[1],[1,1]]
        for i in range(1,numRows-1):
            temp=[1]
            for j in range(0,i):
                val=lis[i][j]+lis[i][j+1]
                temp.append(val)
            temp.append(1)
            lis.append(temp)
        return lis