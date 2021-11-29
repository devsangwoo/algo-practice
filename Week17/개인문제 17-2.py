##프로그래머스 :: 삼각달팽이
def solution(n):
    answer = []
    lst = [[0 for i in range(n)] for _ in range(n)]

    num = 1
    maxi = (n*(n+1))//2
    i = 0
    j = 0
    while True:
        if num > maxi: break;
        for k in range(n):
            lst[i][j] = num
            i = i + 1
            num += 1
        
        n = n -1
        i = i-1
        j = j+1
        if num >maxi: break;
        for l in range(n):
            lst[i][j] = num
            num = num +1
            j = j + 1
        n = n-1
        if num > maxi: break;
        j = j-2
        i = i -1
        for q in range(n):
            lst[i][j] = num
            i = i -1
            j = j-1
            num = num + 1
        n = n-1
        i = i + 2
        j = j + 1
    
    for i in range(len(lst)):
        for j in lst[i]:
            if j != 0:
                answer.append(j)
    return answer
