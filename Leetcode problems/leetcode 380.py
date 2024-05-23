class RandomizedSet:
    import random
    
    def __init__(self):
        self.L={}
        self.a=[]
        

    def insert(self, val: int) -> bool:
        if self.L.get(val)==None:
            self.a.append(val)
            self.L[val]=len(self.a)-1
            return True
        else:
            return False

    def remove(self, val: int) -> bool:
        curr=self.L.get(val)
        if curr==None:
            return False
        else:
            temp=self.a[-1]
            self.a[curr]=temp
            self.L[temp]=curr
            self.L.pop(val)
            self.a.pop()
            return True


    def getRandom(self) -> int:
        i=int(random.random() * len(self.a))
        return self.a[i]
        #r=random.choices(self.a)
        #return r[0]


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
