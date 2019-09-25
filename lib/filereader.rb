# require 'byebug'
file = File.open('05182019.txt')

# Turnstile structure
# entries = {
#     stationName: {
#         trainLines: {
#             controlArea:
#             remoteUnit: 
#             date: {    
#                actual_date: {
#                   timestamp: xxx
#                }
#             }
#         }
#     }
# }
# entries = stationName = trainLines = { controlArea = [], remoteUnit = [], dates = date = 0 }

entries = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = { 'controlArea' => Array.new(0), 'remoteUnit' => Array.new(0), 'dates' => Hash.new { |h, k| h[k] = Hash.new(0)}}}}
exits = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = Hash.new(0)}}}
previous = nil
timestamps = {
    '00' => '00:00 - 04:00',
    '01' => '00:00 - 04:00',
    '02' => '00:00 - 04:00',
    '03' => '00:00 - 04:00',
    '04' => '04:00 - 08:00',
    '05' => '04:00 - 08:00',
    '06' => '04:00 - 08:00',
    '07' => '04:00 - 08:00',
    '08' => '08:00 - 12:00',
    '09' => '08:00 - 12:00',
    '10' => '08:00 - 12:00',
    '11' => '08:00 - 12:00',
    '12' => '12:00 - 16:00',
    '13' => '12:00 - 16:00',
    '14' => '12:00 - 16:00',
    '15' => '12:00 - 16:00',
    '16' => '16:00 - 20:00',
    '17' => '16:00 - 20:00',
    '18' => '16:00 - 20:00',
    '19' => '16:00 - 20:00',
    '20' => '20:00 - 00:00',
    '21' => '20:00 - 00:00',
    '22' => '20:00 - 00:00',
    '23' => '20:00 - 00:00'
}

file.each_line do |line|
    current = line.split(',')
    control_area = current[0]
    remote_unit = current[1]
    turnstile = current[2]
    station = current[3]
    trains = current[4].to_s
    date = current[6]
    if !previous
        previous = current
        next
    elsif previous[3] != station
        previous = current
        next
    else 
        date = previous[6] != date ? previous[6] : date 
        previous_timestamp = previous[7]
        timestamp = timestamps[previous_timestamp[0..1]]
        station_obj = entries[station][trains]
        station_obj["controlArea"].push(control_area) unless station_obj["controlArea"].include?(control_area)
        station_obj["remoteUnit"].push(remote_unit) unless station_obj["remoteUnit"].include?(remote_unit)
        # entries[station][trains][date][timestamp] ||= 0
        # exits[station][trains][date][timestamp] ||= 0
        previous_entries = previous[9].to_i
        current_entries = current[9].to_i
        previous_exits = previous[10].to_i
        current_exits = current[10].to_i
        if ((current_entries - previous_entries < 50000) && (current_entries - previous_entries > 0 ))
            entries[station][trains]["dates"][date][timestamp] += current[9].to_i - previous[9].to_i
        end 
        # if ((current_exits - previous_exits < 50000) && (current_exits - previous_exits > 0 ))
        #     exits[station][trains][date][timestamp] += current[10].to_i - previous[10].to_i
        # end 
        previous = current
    end
end  

 p entries 
#  p exits
