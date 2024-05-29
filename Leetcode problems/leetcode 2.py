# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        num1=l1.val
        num2=l2.val
        out=ListNode(0)
        dummy=out
        c=10
        while not l1.next==None:
            num1=num1+c*l1.next.val
            c=c*10
            l1=l1.next
        c=10
        while not l2.next==None:
            num2=num2+c*l2.next.val
            c=c*10
            l2=l2.next
        
        s=num1+num2
        if s==0:
            return dummy
        while s>0:
            out.next=ListNode(int(s%10))
            s=(s)//10
            out=out.next
        return dummy.next
