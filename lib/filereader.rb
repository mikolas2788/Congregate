require 'byebug'

# hash = Hash.new(Hash.new(Hash.new(Array.new())))
# hash = station : turnstile : date : [1, 2, 3, 4, 5, 6, 7]
# h = Hash.new { |hash, key| hash[key] = "Go Fish: #{key}" }
# p hash

# structure of data 
# per turnstiles difference
# hash = station : turnstile : date : timestamp : difference
# per station total count
# hash = station : date : timestamp : total 

=begin
timestamp
'00:00 - 04:00': 0
'04:00 - 08:00': 0 
'08:00 - 12:00': 0 
'12:00 - 16:00': 0 
'16:00 - 20:00': 0 
'20:00 - 00:00': 0 
=end 

# Sample Structure
# {"59 ST"=>
#     {"02-00-00"=>
#         {"05/11/2019"=>
#           {"00:00 - 04:00"=>0, "04:00 - 08:00"=>0, "08:00 - 12:00"=>0, "12:00 - 16:00"=>0, "16:00 - 20:00"=>0, "20:00 - 00:00"=>0}, 
# "05/12/2019"=>{"00:00 - 04:00"=>0, "04:00 - 08:00"=>0, "08:00 - 12:00"=>0, "12:00 - 16:00"=>0, "16:00 - 20:00"=>0, "20:00 - 00:00"=>0}}}}

file = File.open('lib/test.txt')

entries = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = { '00:00 - 04:00' => 0, '04:00 - 08:00' => 0, '08:00 - 12:00' => 0, '12:00 - 16:00' => 0, '16:00 - 20:00' => 0, '20:00 - 00:00' => 0  }}}}
exits = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = { '00:00 - 04:00' => 0, '04:00 - 08:00' => 0, '08:00 - 12:00' => 0, '12:00 - 16:00' => 0, '16:00 - 20:00' => 0, '20:00 - 00:00' => 0  }}}}
station_entries = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = { '00:00 - 04:00' => 0, '04:00 - 08:00' => 0, '08:00 - 12:00' => 0, '12:00 - 16:00' => 0, '16:00 - 20:00' => 0, '20:00 - 00:00' => 0  }}}
station_exits = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = { '00:00 - 04:00' => 0, '04:00 - 08:00' => 0, '08:00 - 12:00' => 0, '12:00 - 16:00' => 0, '16:00 - 20:00' => 0, '20:00 - 00:00' => 0  }}}
entry = [] 
exit = [] 
idx1 = 0 
idx2 = 0

file.each_line do |line| 
    array = line.split(',')
    station = array[3]
    turnstile = array[2]
    date = array[6]
    entry << array[-2].to_i
    exit << array[-1].to_i
    entries[station][turnstile][date]
    exits[station][turnstile][date]
    station_entries[station][date]
    station_exits[station][date]
end 

entries.each do |station, turnstiles| 
    turnstiles.each do |turnstile, dates|
        dates.each do |date, timeranges|
            timeranges.each do |timerange, counter|
                if idx1 == 0
                    idx1 += 1
                    entries[station][turnstile][date][timerange] = entry[idx1] - entry[idx1-1]
                else
                    break if entry[idx1+1].nil?
                    idx1 += 1 
                    entries[station][turnstile][date][timerange] = entry[idx1] - entry[idx1-1]
                end 
            end 
        end 
    end 
end 

exits.each do |station, turnstiles| 
    turnstiles.each do |turnstile, dates|
        dates.each do |date, timeranges|
            timeranges.each do |timerange, counter|
                if idx2 == 0
                    idx2 += 1
                    exits[station][turnstile][date][timerange] = exit[idx2] - exit[idx2-1]
                else
                    break if exit[idx2+1].nil?
                    idx2 += 1
                    exits[station][turnstile][date][timerange] = exit[idx2] - exit[idx2-1]
                end 
            end 
        end 
    end 
end 

# puts entries
# puts exits

#next step is to add the counter total for all turnstiles within one station

station_turnstiles = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = { '00:00 - 04:00' => 0, '04:00 - 08:00' => 0, '08:00 - 12:00' => 0, '12:00 - 16:00' => 0, '16:00 - 20:00' => 0, '20:00 - 00:00' => 0  }}}

entries.each do |station, turnstiles| 
    turnstiles.each do |turnstile, dates|
        dates.each do |date, timeranges|
            timeranges.each do |timerange, counter|
                station_turnstiles[station][date][timerange] += counter
            end 
        end 
    end 
end

p station_turnstiles

# station_entries.each do |station2, dates2| 
#     dates2.each do |date2, total| 
#         if station1 == station2 && date1 == date2 
            
#         end 
#     end 
# end 





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