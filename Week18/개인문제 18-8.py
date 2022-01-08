# 2차원 배열 max = max(map(max,result))
import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
grp = []
for i in range(n):
    grp.append(list(map(int, input().split())))

maxi = max(map(max,grp))
mini = min(map(min,grp))

dx = [0,0,-1,1]
dy = [1,-1,0,0]


#https://www.acmicpc.net/problem/2468
def bfs(num, a,b):
    q = deque()
    q.append((a,b))

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx >= n or ny >= n or nx < 0 or ny < 0:
                continue
            if lst[nx][ny] <= num:
                continue
            elif lst[nx][ny] > num:
                q.append((nx,ny))
                lst[nx][ny] = 0
    return True
count = []
for k in range(mini, maxi + 1):
    lst = [item[:] for item in grp]
    cnt = 0
    for i in range(n):
        for j in range(n):
            if lst[i][j] <= k:
                continue
            if bfs(k,i,j):
                cnt += 1
    count.append(cnt)

if(max(count) == 0):
    print(1)
else:
    print(max(count))

