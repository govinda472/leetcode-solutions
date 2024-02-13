class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        l=[[1],[1,1]]
        for i in range(1,rowIndex):
            temp=[1]
            for j in range(0,i):
                val=l[i][j]+l[i][j+1]
                temp.append(val)
            temp.append(1)
            l.append(temp)
        return l[rowIndex]
