class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or numRows >= len(s):
            return s
        
        # Initialize a list of empty strings for each row
        l = [''] * numRows
        
        # Variables to track the current position and direction
        index, step = 0, 1
        
        for char in s:
            l[index] += char
            
            # Change direction at the top and bottom row
            if index == 0:
                step = 1
            elif index == numRows - 1:
                step = -1
            
            index += step
        
        # Join all rows to get the final zigzag string
        return ''.join(l)

        
            
