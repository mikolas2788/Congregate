file = File.open('lib/test.txt')
# hash = Hash.new(Hash.new(Hash.new(Array.new())))
# hash = station : turnstile : date : [1, 2, 3, 4, 5, 6, 7]
# h = Hash.new { |hash, key| hash[key] = "Go Fish: #{key}" }

hash = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = Array.new }}}
file.each_line do |line| 
    array = line.split(',')
    # p array 
    station = array[3]
    # p station
    turnstile = array[2]
    date = array[6]
    counter = array[-2]
    hash[station][turnstile][date].push(counter)
end 

puts hash

# file = File.open('lib/05182019.txt')
# current_date = '';
# previous_value = nil;
# hash = Hash.new(0);

# # Data is organized by station, then by turnstile number, then by date, then by timestamp. 
# # But because we only want to count by station, we can combine counts from each turnstile of the same station,
# # Which means that we can simply add, to hash[station], the difference between previous and current value, as long as we are within a date group.
# # If we hit a new date, we simply don't add to the count for that line because this is a new date and thus has no relation to the timestramp from the previous line.

# file.each_line do |line|
#     array = line.split(',');
#     value = array[-2].to_i;
#     date = array[6];

#     if current_date != date
#         current_date = date
#         previous_value = value
#     elsif value == 0
#         # If we get a random reset in the middle of a date group, just don't add that value and set it as the next reference.
#         hash[array[3]] += 1
#         previous_value = value
#     else
#        # Some date group do down so just track the change.
#         hash[array[3]] += (value - previous_value).abs
#         previous_value = value
#     end 
# end

# puts hash.to_a

# need to separate out values into smaller components
# need to factor in resets
# need to create multiple hashes containing arrays of each station with entry amount every 4 hour rotation