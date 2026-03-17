def sum67(nums):
  total = 0
  add = True
  for n in nums:
    if n == 6:
      add = False
    elif not add and n == 7:
      add = True
    elif add:
      total += n
  return total