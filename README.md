# Congregate

### Overview
Congregate is a data visualization of NYC’s MTA turnstile data set, which tracks the amount of people entering and exiting their stations on a weekly basis. This app's purpose is to provide the general public and small business owners with an accessible visualization of where and when people congregate to better target their business. Uber drivers, food truck owners, and organizations looking to advertise could benefit from this endeavor. 

### Technologies
* JavaScript
* Google Maps API
* Google Heatmap API
* HTML
* CSS
* Ruby

### Live Demo
Check out the [live](https://mikolas2788.github.io/Congregate/) demo!
![](https://i.imgur.com/jxqeZdd)
![](https://i.imgur.com/3vMut46.png)

### Notes
Congregate is still a work in progress as of October 2019. Some updates to be expected in the coming weeks include autoplay feature, addition of entirety of September and exit data, and stylistic improvements. 

As the data utilized is currently static, long term goals would be to have a seamless automatic process in which Congregate will extract, parse and model the latest data, to provide recent and relevant data. 

### Challenges
The greatest challenge of this project had to do with the data set itself. MTA’s turnstile data is unstandardized with little documentation. For instance, the data set would normally provide data in 4 hour sets, but would randomly begin/end in odd intervals such as 8:32. The counters at a given turnstile may also reset, but there is no set pattern. Given the magnitude of the data set’s 200,00 lines of data, and limited documentation, it was a lengthy journey of incurring technical debt without the knowledge of these anomalies or understanding MTA’s rationale for them. 

The next largest challenge was trying to find a programmatic solution to the dataset not containing the necessary geographic coordinates to display the heatmap. There exists other datasets that does contain station coordinate data, but there was no common key I could utilize to connect the two data sets. While I could have manually changed the names of 400+ stations to ensure they’d match, this would not be sustainable for every time I’d be adding additional datasets. I have temporarily chosen to mitigate this issue by utilizing Chris Whong’s publicly provided station coordinates, but had previously attempted Google’s Geocode API along with Firebase, Excel’s built-in approximate/fuzzy matching, and writing javascript scripts to match similar enough station names. Unfortunately, they don’t capture the fully programmatic solution I have in mind. 

### Noteworthy Mentions
I would like to recognize Nick Werner for his much needed assistance in parsing the unpalatable dataset and Chris Whong’s coordinate data on his github.


