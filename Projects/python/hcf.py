def cal_hcf(x,y):
  if x>y:
    smaller=y
  else:
    smaller=x
  for i in range(1,smaller+1):
    if((x%i==0)and(y%i==0)):
      hcf=i 
  return hcf     

x=54
y=24
print("The HCF is:", cal_hcf(x,y))
