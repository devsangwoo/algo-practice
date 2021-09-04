'''
[
[
"POOOP",
"OXXOX",
"OPXPX",
"OOXOX",
"POXXP",]
1. P일때만 검사
2. 사방향 P
3. 한방향 이상 O  > 그 O에서 +1 -1씩 해서 P가 존재하면 false
4. X면 그냥 넘기기

'''
def solution(places):
    
    dx = [1,-1,0,0]
    dy = [0,0,1,-1]
    answer = []   
    def check(test):
        for i in range(5):
            for j in range(5):
                if test[i][j] == 'P':
                    for k in range(4):
                        a = i + dx[k]
                        b = j + dy[k]
                        if a < 0 or a >= 5 or b < 0 or b >= 5:
                            continue
                        if test[a][b] == 'P':
                            return False
                        if test[a][b] == 'O':
                            count = 0
                            for l in range(4):
                                c = a + dx[l]
                                d = b + dy[l]
                                if c < 0 or c >= 5 or d < 0 or d >= 5:
                                    continue
                                if test[c][d] == 'P':
                                    count += 1
                                    if count >= 2:
                                        count = 0
                                        return False
        return True
    
    for test in places:
        isTrue = check(test)
        if(isTrue):
            answer.append(1)
        else:
            answer.append(0)
                                        
        
           
    
    return answer
