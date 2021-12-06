#프로그래머스 :: 땅따먹기

def solution(land):
    #각 행에서 최대, 차대를 구해서 최대의 행에는 차대, 나머지는 최대 더해주면서 내려가기
    for i in range(1,len(land)):
        # 최대 행의 번호 찾기 
        col = land[i-1].index(max(land[i-1]))
        
        land[i-1].sort()
        one = land[i-1][3] 
        two = land[i-1][2]
        
        for j in range(4):
            if col == j:
                land[i][j] = land[i][j] + two
            else:
                land[i][j] = land[i][j] + one
    answer = max(land[-1])
    return answer
