# require 'byebug'

file = File.open('test.txt')

entries = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = { '00:00 - 04:00' => 0, '04:00 - 08:00' => 0, '08:00 - 12:00' => 0, '12:00 - 16:00' => 0, '16:00 - 20:00' => 0, '20:00 - 00:00' => 0  }}}}
exits = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = { '00:00 - 04:00' => 0, '04:00 - 08:00' => 0, '08:00 - 12:00' => 0, '12:00 - 16:00' => 0, '16:00 - 20:00' => 0, '20:00 - 00:00' => 0  }}}}
station_entries = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = { '00:00 - 04:00' => 0, '04:00 - 08:00' => 0, '08:00 - 12:00' => 0, '12:00 - 16:00' => 0, '16:00 - 20:00' => 0, '20:00 - 00:00' => 0  }}}
station_exits = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = { '00:00 - 04:00' => 0, '04:00 - 08:00' => 0, '08:00 - 12:00' => 0, '12:00 - 16:00' => 0, '16:00 - 20:00' => 0, '20:00 - 00:00' => 0  }}}
entry = [] 
exit = [] 
idx1 = 0 
idx2 = 0
previous_turnstile1 = "02-00-00"
previous_turnstile2 = "02-00-00"

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
                elsif previous_turnstile1 != turnstile
                    idx1 += 2
                    previous_turnstile1 = turnstile
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
                elsif previous_turnstile2 != turnstile
                    idx1 += 2
                    previous_turnstile2 = turnstile
                    entries[station][turnstile][date][timerange] = entry[idx1] - entry[idx1-1]
                else
                    break if exit[idx2+1].nil?
                    idx2 += 1
                    exits[station][turnstile][date][timerange] = exit[idx2] - exit[idx2-1]
                end 
            end 
        end 
    end 
end 

station_turnstiles1 = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = { '00:00 - 04:00' => 0, '04:00 - 08:00' => 0, '08:00 - 12:00' => 0, '12:00 - 16:00' => 0, '16:00 - 20:00' => 0, '20:00 - 00:00' => 0  }}}
station_turnstiles2 = Hash.new { |h, k| h[k] = Hash.new { |h, k| h[k] = { '00:00 - 04:00' => 0, '04:00 - 08:00' => 0, '08:00 - 12:00' => 0, '12:00 - 16:00' => 0, '16:00 - 20:00' => 0, '20:00 - 00:00' => 0  }}}

entries.each do |station, turnstiles| 
    turnstiles.each do |turnstile, dates|
        dates.each do |date, timeranges|
            timeranges.each do |timerange, counter|
                station_turnstiles1[station][date][timerange] += counter
            end 
        end 
    end 
end

exits.each do |station, turnstiles| 
    turnstiles.each do |turnstile, dates|
        dates.each do |date, timeranges|
            timeranges.each do |timerange, counter|
                station_turnstiles2[station][date][timerange] += counter
            end 
        end 
    end 
end

p station_turnstiles1
p station_turnstiles2
