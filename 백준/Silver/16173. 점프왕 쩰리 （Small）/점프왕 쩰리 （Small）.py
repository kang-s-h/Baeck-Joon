from collections import deque

def can_reach_goal(board):
    n = len(board)
    visited = [[False] * n for _ in range(n)]
    queue = deque()
    queue.append((0, 0))
    visited[0][0] = True

    while queue:
        x, y = queue.popleft()
        jump = board[x][y]

        if x == n - 1 and y == n - 1:
            return True

        nx, ny = x, y + jump
        if 0 <= ny < n and not visited[nx][ny]:
            visited[nx][ny] = True
            queue.append((nx, ny))

        nx, ny = x + jump, y
        if 0 <= nx < n and not visited[nx][ny]:
            visited[nx][ny] = True
            queue.append((nx, ny))

    return False

n = int(input())
board = [list(map(int, input().split())) for _ in range(n)]

print("HaruHaru" if can_reach_goal(board) else "Hing")
