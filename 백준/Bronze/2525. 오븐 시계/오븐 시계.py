h, m = map(int, input().split())
m2 = int(input())

if m + m2 < 60:
    print(h, m+m2)
else:
    m3 = int((m + m2) % 60)
    m4 = int((m + m2) / 60)
    h = m4 + h

    if h < 24 :
        print(h, m3)
    else:
        h = h - 24
        print(h, m3)