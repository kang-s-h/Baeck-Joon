h, m = map(int, input().split())


if h == 0 & 0 <= m & m < 45:
    print(23,m + 15)
elif h == 0 & m == 45:
    print(0,0)
else:
    if m < 45 :
        print(h-1,m + 15)
    else:
        print(h,m-45)