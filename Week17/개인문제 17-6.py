# 프로그래머스 :: 배달
#다익스트라 알고리즘
import heapq

def solution(N, road, K):
    #노드 연결된 정보 담는 리스트
    grp = [[] for i in range(N+1)]
    INF = int(1e9)
    dis = [INF] * (N+1)
    
    #입력시에, 
    for item in road:
        grp[item[0]].append((item[1],item[2]))
        grp[item[1]].append((item[0],item[2]))
        
    def dijkstra(start):
        q = []
        heapq.heappush(q, (0,start))
        dis[start] = 0
        while q:
            dist, now = heapq.heappop(q)
            if dis[now] < dist:
                continue
            for i in grp[now]:
                cost = dist + i[1]
                if cost < dis[i[0]]:
                    dis[i[0]] = cost
                    heapq.heappush(q, (cost,i[0]))

    dijkstra(1)
    answer = 0
    for time in dis:
        if time <= K:
            answer += 1
            
    return answer
