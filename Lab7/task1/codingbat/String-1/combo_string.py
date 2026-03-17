def combo_string(a, b):
  # Check if string 'a' is shorter than string 'b'
  if len(a) < len(b):
    return a + b + a
  else:
    # Otherwise, 'b' is the shorter one
    return b + a + b