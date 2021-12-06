#프로그래머스 :: 피로도
def solution(k, dungeons):
    answer = -1
    check = [False]*len(dungeons)
    lst = []
    print(check)
    def dfs(count,n, tired):

        if n == len(dungeons):
            lst.append(count)
            return
        for i in range(len(dungeons)):
            if( check[i] == True ):
                continue
            else:
                if( dungeons[i][0] > tired ):
                    dfs(count, n + 1, tired)
                    continue
                else:
                    check[i] = True
                    dfs(count +1, n + 1, tired - dungeons[i][1])
                    check[i] = False
        
    dfs(0,0,k)
    answer = max(lst)
    
    return answer
