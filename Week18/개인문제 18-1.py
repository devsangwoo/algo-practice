#2018 KAKAO BLIND RECRUITMENT :: [1차] 캐시

def solution(cacheSize, cities):
    answer = 0
    ch = []
    for city in cities:
        city = city.upper()
        # print(city)
        if city in ch:
            answer += 1
            ch.append(ch.pop(ch.index(city)))
        else:
            #city가 없는경우 캐시에
            answer += 5
            #캐시에 추가
            ch.append(city)
            if( len(ch) > cacheSize):
                ch.pop(0)
    
    return answer
