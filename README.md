# CoVid19View

Visualization of CoViD-19 data [live](https://covidcrt.uber.space/)

I started this project out of dissatisfaction with the visualizations of CoViD-19 case data.
Most interesting to me, was how the daily changes develop, i.e. how fast is the change changing?

The first step was to get accustomed to [Amber](https://lolg.it/amber/amber), a nice Smalltalk running in the browser.
After solving all kinds of issues with the tool stack, I started with the app and the access to the [JHU data](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data).

## Data

For gathering data , I use [VisualWorks](http://www.cincomsmalltalk.com/main/products/visualworks/), since it is my home environment with all my tools. Besides, I think that it is one of the most productive development environments available on this planet.

The 3 data files (confirmed, deaths and recovered) are downloaded and combined into series of datapoints, each with the 3 attributes confirmed, deaths and recovered. The result is a list of all countries or states with its data series. This list is then written as JSON to a file which I copy manually into the GitHub directory and onto the server where the amber app sits (I am working on automating this). 

The latest change to the data structure is that I put the list into an envelop together with metadata (currently just the modification timestamp).

This JSON is then read by the Amber app.

The German [official data](https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/dd4580c810204019a7b8eb3e0b329dd6_0/data) on county level is also downloaded and transformed into the JSON schema from above. Interestingly, the data have more interesting attributes: age group and sex! Also, the structure of the data is different: it is a stream of the official reports from the counties of that day. Therefore, the data had to be accumulated to create the time series.

Now I want the code to be so flexible so that other data sources can be added easily. AFTER I manage to automate the downloads and distribution.

## App



## Getting Started

Install Amber and create an Amber project,
as shown in [Amber Instructions](https://lolg.it/amber/amber#prerequisities).

## Use Covid19view as a library in a client project

If not already present, create a client project
in an empty directory with `amber init`.

In a client project, run

```sh
npm install Covid19view --save
grunt devel
amber serve
```

Go to `http://localhost:4000/` in your browser and
in all packages that use Covid19view,
add `'amber-covid19view/Covid19view'` to the package imports,
save the change and commit the package. Reload.

## Contributing

To bring project alive (for example after `git clone`):

```sh
npm run init
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions
