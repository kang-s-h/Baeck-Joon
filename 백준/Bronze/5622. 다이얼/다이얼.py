lst = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']
res = 0
str = input()
for i in str:
    for k in lst:
        if i in k:
            res += lst.index(k) + 3
            break

print(res)