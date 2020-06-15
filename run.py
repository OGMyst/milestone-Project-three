import datetime


date_select = str(datetime.date.today())
split_date = date_select.split("-")
current_month = int(split_date[1]) - 1

month_names = ("January", "February", "March", "April",
               "May", "June", "July", "August", "September",
               "Octboer", "November", "Decemeber")

month_select = month_names[current_month]

print(month_select)
