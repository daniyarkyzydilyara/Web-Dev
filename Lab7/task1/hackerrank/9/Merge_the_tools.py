def merge_the_tools(string, k):
    # your code goes here
    for i in range(0, len(string), k):
        t = string[i : i + k]
        
        seen = set()
        u = []
        
        for char in t:
            if char not in seen:
                u.append(char)
                seen.add(char)
        
        print("".join(u))


if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)