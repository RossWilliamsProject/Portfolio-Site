import React from 'react'
import image002 from "../../Assets/CovidRImages/image002.jpg";
import image005 from "../../Assets/CovidRImages/image005.gif";
import image008 from "../../Assets/CovidRImages/image008.gif";
import image010 from "../../Assets/CovidRImages/image010.jpg";
import image012 from "../../Assets/CovidRImages/image012.jpg";
import image014 from "../../Assets/CovidRImages/image014.jpg";
import image016 from "../../Assets/CovidRImages/image016.jpg";
import image018 from "../../Assets/CovidRImages/image018.jpg";
import image020 from "../../Assets/CovidRImages/image020.jpg";
import image022 from "../../Assets/CovidRImages/image022.jpg";
import image024 from "../../Assets/CovidRImages/image024.jpg";
import image026 from "../../Assets/CovidRImages/image026.jpg";
import image028 from "../../Assets/CovidRImages/image028.jpg";
import image030 from "../../Assets/CovidRImages/image030.jpg";
import image032 from "../../Assets/CovidRImages/image032.jpg";
import image034 from "../../Assets/CovidRImages/image034.jpg";

const CovidR = () => {
    return (
        <div>
            <meta httpEquiv="Content-Type" content="text/html; charset=windows-1252" />
            <meta name="ProgId" content="Word.Document" />
            <meta name="Generator" content="Microsoft Word 15" />
            <meta name="Originator" content="Microsoft Word 15" />
            <link rel="File-List" href="20147862_Ross_Williams_report_files/filelist.xml" />
            <link rel="Edit-Time-Data" href="20147862_Ross_Williams_report_files/editdata.mso" />
            <link rel="themeData" href="20147862_Ross_Williams_report_files/themedata.thmx" />
            <div className="WordSection1" style={{ "paddingRight": "3rem", "paddingLeft": "3rem", "paddingTop": "2rem" }}>
                <h1 style={{ "margin-left": "-.25pt" }}>
                    A Case Study – Global
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                    Description of Data
                </h1>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": ".05pt", "margin-left": "-.25pt" }}>
                    The data used in this case study is a dataset
                    compiled by “Our World in Data” – an organisation dedicated to compiling
                    datasets to aid researchers on serious issues, such as war, inequality, and
                    importantly to this case study – disease. The dataset I selected is the “Global
                    Data on COVID-19” (GitHub. 2022.), a massive dataset compiled of daily updated
                    statistics taken from various sources, primarily the COVID-19 data repository
                    at Johns Hopkins University, the Oxford University COVID-19 tracker, and
                    international organisations such as the UN, OECD and the World Bank. Some data
                    is also collected by members of the OWID team (Hasell, J., Mathieu, E.,
                    Beltekian, D. et al (2020), Mathieu,
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    E., Ritchie, H., Ortiz-Ospina, E. et al (2021))
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "10.0pt", "margin-left": "-.25pt" }}>
                    The dataset contains information on not only the
                    more obvious COVID related metrics, such as the total and recent number of
                    cases, vaccinations, deaths and hospitalisations for each country, but also
                    more niche and specific measurements that can be used to draw more complex
                    conclusions and relationships. Examples of these less straightforward metrics
                    include the HDI (Human Development Index), Stringency Index, which is a ranking
                    system used to measure the strictness of government COVID response, or even
                    incredibly specific (although relevant) statistics such as the number of
                    handwashing facilities available per share of population. The data is organised
                    as a collection of regions, which each have a collection of days with COVID
                    statistics.
                </p>
                <h1 style={{ "margin-left": "-.25pt" }}>
                    Initial Questions
                    <i style={{ "mso-bidi-font-style": "normal" }}>
                        <span style={{ "mso-spacerun": "yes" }}>

                        </span>
                    </i>
                </h1>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    This case study consists of three main questions that
                    are answered using visualisations, then further explored or refined using
                    exploratory techniques and additional visualisations. The aim of the three
                    primary questions was to explore into each of the key data areas of the
                    previously described dataset; cases, deaths, and vaccinations.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    The first question seeks to not only explore the
                    widespread loss of life related to the COVID pandemic - but the loss of life
                    relative to the population of the country affected. To see this relationship,
                    the question is worded as follows: “How many COVID deaths were there per
                    100,000 people in each country?”
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    The second question was created with the intention of
                    exploring the vast amounts of new cases each month in late 2021 – however,
                    having an open question leaves an impossible task of allowing clearly
                    comparable data for such a large dataset. To reduce the complexity of the
                    solution, the following question was chosen: “Which 5 countries had the most
                    new cases each month for the second half of the year 2021?” this question seeks
                    to explore the vast number of new cases, the rate of which cases grew, and
                    which countries consistently had the largest number of cases.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "10.85pt", "margin-left": "-.25pt" }}>
                    The final question, “Did vaccinations in Europe
                    lower the number of deaths?” seeks to explore the relationship between deaths
                    and vaccinations. Exploring this relationship will help to see if the
                    vaccinations were useful in reducing the growth of mortalities. To answer this
                    question, I will visualise data from both European countries, and the EU as a
                    whole to try and get the best overview of the relationship regardless of COVID
                    control laws and regulations.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <h1 style={{ "margin-left": "-.75pt", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 192.05pt" }}>
                    Question
                    One
                    <span style={{ "mso-tab-count": "1" }}>

                    </span>
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </h1>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Question: “How many COVID deaths were there per
                    100,000 people in each country?”
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Visualisation Strategies
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "19.4pt", "margin-bottom": "8.9pt", "margin-left": "0cm", "-webkit-text-align": "justify", "text-align": "justify", "-webkit-text-justify": "inter-ideograph", "text-justify": "inter-ideograph", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    For this visualisation, the data is a
                    collection of many records, as I want to display information for each country,
                    the visualisation must be able to provide a bigger picture, but allow the user
                    to single in on a country for a more specific inspection. For this reason, I
                    decided that an interactive choropleth map would be the most suitable
                    visualisation. This is because a choropleth map (as opposed to a heat map), can
                    be more easily represented using standard geographical boundaries, such as the
                    borders of existing countries. The interaction will provide the user of the
                    visualisation the ability to select a country, which will allow them to see a
                    more specific measurement of the countries deaths per 100k, instead of the more
                    broad comparison a choropleth provides alone.
                    <span style={{ "mso-spacerun": "yes" }}>
                    </span>
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Fitness of Data
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    To make this visualisation, I will need the following
                    data: The total number of deaths in a country, the name of the country, and the
                    borders of that country. The dataset named does not contain the necessary
                    information to plot borders – so an additional data set named “map_data” was
                    imported from the ggplot library, containing a list of longitude and latitude
                    values for country borders.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Development Process
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Data Cleaning: A subset was taken containing the
                    region name, and its new deaths for each day in the dataset. For the map data
                    set, the order and sub region categories were nullified. I also created another
                    data frame which selected the populations from the COVID data frame, then removed
                    all duplications.
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Data Transformation: The data from the COVID data
                    frame required heavy transformation – this involved omitting all instances of
                    NA deaths, and then using aggregate to change the series of new deaths per day
                    to a total amount of deaths over all time. Using left join, the three data
                    frames (map data, COVID data and population data) were combined together under
                    the region name, then the population and deaths statistics were mutated into
                    one – deaths per 100k.There was also a complication in which some countries
                    were named differently in the two datasets, this was solved by renaming some
                    entries.. This leaves a data frame containing a series of borders in the forms
                    of longitude and latitude, which have region names and deaths/100k stats
                    associated.
                    <span style={{ "mso-spacerun": "yes" }}>
                    </span>
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": ".0001pt", "margin-left": "-.25pt" }}>
                    Data Visualisation: Technically,
                    the visualisation is a series of geom polygons within a ggplot – with the X and
                    Y axis containing the “long” and “lat” values from the map data. The polygons
                    are shaded to represent the deaths/100k, with higher values being red, and the
                    lower values a shade of green (and grey representing NA values). To make the
                    map more easily visible, the axis and backgrounds are removed using theme. The
                    ggplot is then displayed using ggplotly – allowing each polygon (when hovered
                    over) to show a tag (See Figure 2) containing the region name and its
                    corresponding death/100k statistic.
                    <span style={{ "mso-spacerun": "yes" }}>
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "2.55pt", "margin-left": "23.15pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={540} height={243} src={image002} vShapes="Picture_x0020_271" />
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "8.0pt", "margin-left": "-.75pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 36.0pt 72.0pt 108.0pt 197.0pt" }}>
                    Figure 1: Visualisation 1
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Visualisation Design Evaluation
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    I believe that I made the correct choice in using a
                    choropleth map here – the map is more useful than a heat map would be, and it
                    shows clearly the relationship between each country and the deaths/100k, at a
                    higher level glance value, and due to the interaction, at a lower level
                    too.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Exploratory Process
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": ".0001pt", "margin-left": "-.25pt" }}>
                    The exploratory process for this
                    visualisation was simple, it primary involved zooming in using the ggplotly
                    interaction, and inspecting countries that stood out the most as seemingly
                    large (or low) amounts of deaths, essentially, exploring outliers.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "3.05pt", "margin-left": "0cm", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-ignore": "vglayout" }}>
                    </span>
                </p>
                <table cellPadding={0} cellSpacing={0} align="left">
                    <tbody>
                        <tr>
                            <td width={881} height={0} />
                        </tr>
                        <tr>
                            <td />
                            <td>
                                <img alt="" width={563} height={118} src={image005} vShapes="Group_x0020_6065 Rectangle_x0020_306 Rectangle_x0020_307 Rectangle_x0020_308 Rectangle_x0020_309 Picture_x0020_409 Picture_x0020_410 Shape_x0020_411" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br style={{ "mso-ignore": "vglayout" }} clear="ALL" />
                <p />
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "8.0pt", "margin-left": "-.75pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 36.0pt 72.0pt 224.6pt" }}>
                    Figure 2: Demonstration of
                    Visualisation Exploration
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Generated Questions and Refinements
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": ".0001pt", "margin-left": "-.25pt" }}>
                    The exploration above raised
                    several questions, mostly associated with finding the differences between
                    Ecuador and Peru in terms of COVID, despite being geographically close. The
                    umbrella question is “why does Peru have considerably more deaths than
                    Ecuador?”, but to answer this question, we must evaluate several differences,
                    such as; difference in population density, the difference in tests per thousand
                    people and the difference in vaccinations and the difference in boosters all
                    over time. These differences are visualised below (and in index Figure 15 and
                    16). Please note that these graphs do not appear in the PDF output, due to a
                    bug with the “parcords” plot_ly type.
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": ".3pt", "margin-left": "41.5pt", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <oP>

                    </oP>
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "8.75pt", "margin-left": "0cm", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-ignore": "vglayout" }}>
                    </span>
                </p>
                <table cellPadding={0} cellSpacing={0}>
                    <tbody>
                        <tr>
                            <td width={893} height={0} />
                        </tr>
                        <tr>
                            <td />
                            <td>
                                <img alt="" width={517} height={176} src={image008} vShapes="Group_x0020_6066 Picture_x0020_412 Picture_x0020_413 Rectangle_x0020_415 Rectangle_x0020_417 Rectangle_x0020_419 Rectangle_x0020_420 Rectangle_x0020_421" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br style={{ "mso-ignore": "vglayout" }} clear="ALL" />
                <span style={{ "mso-spacerun": "yes" }}>

                </span>
                <p />
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "10.0pt", "margin-left": "-.75pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 36.0pt 72.0pt 108.0pt 144.05pt 237.15pt" }}>
                    Figure 3:
                    Visualisation 1.1
                </p>
                <h1 style={{ "margin-left": "-.25pt" }}>
                    Question Two
                </h1>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    “Which 5 countries had the most new cases each month
                    for the second half of the year 2021?”
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Visualisation Strategies
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    The obvious visualisation strategy was a grouped bar
                    chart, with 5 countries in each group, grouped by month. This allows for
                    comparison between not only the numbers of cases for each of the 5
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    highest countries in each month, but also allows for
                    a greater visualisation of the trend over time - allowing the user to get a
                    general gist of whether COVID cases have risen in general. To allow further
                    visualisation of which countries are reoccurring, the bars should be colour
                    coded by the region in the graph, rather than the group that it belongs to. I
                    believe that the only alternative to this visualisation is a subplot, with each
                    month containing its own bar graph, however, this has the disadvantage of less
                    easy comparison between months.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Fitness of Data
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    The data fitness for answering this question is
                    adequate. To create a visualisation for this, we will need a list of dates,
                    with each date containing the number of new cases registered on that date for
                    each country, all present in the COVID dataset.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Development Process
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Data Cleaning: Data entries in the COVID data set
                    which were not countries (the dataset contains data for continents) were
                    removed and dropping null values. The “date” column of the data frame was used
                    to create a new column for month and year, and a subset was taken of the year
                    2021. The date and year columns were then removed to leave only the data needed
                    for the visualization.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Data Transformation: Transforming the data became
                    complicated, the months must be named rather than numbered for greater
                    readability, however, if they were named they would not be displayed in order.
                    To solve this issue, a new data frame named “month Order” was created so that
                    the data frame could be sorted according to this order. In order to aggregate
                    the new cases data in relation to both the region and the month, the two were
                    combined into one variable, then separated after aggregation. Data frames for
                    each month were then separated out, sorted, and the top 5 taken from the tail
                    from each one and bound to a new data frame.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Data Visualisation: The visualisation consists of a
                    ggplot geom bar using the position dodge property, which causes the bars to be
                    grouped by the x axis value (month) rather than stacked. The bar chart is
                    colour coded for regions, and the colour scale used is from the viridis
                    library. Each country present can be seen in the legend, or by hovering over a
                    bar due to the use of ggplotly.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" style={{ "margin": "0cm", "margin-bottom": ".0001pt", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "-10.7pt", "margin-bottom": "2.3pt", "margin-left": "3.0pt", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-ignore": "vglayout" }}>
                    </span>
                </p>
                <table cellPadding={0} cellSpacing={0} align="center">
                    <tbody>
                        <tr>
                            <td width={832} height={0} />
                        </tr>
                        <tr>
                            <td />
                            <td>
                                <img alt="" width={646} height={268} src={image010} vShapes="Picture_x0020_517" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br style={{ "mso-ignore": "vglayout" }} clear="ALL" />
                <p />
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "8.0pt", "margin-left": "-.75pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 36.0pt 72.0pt 108.0pt 144.05pt 233.05pt" }}>
                    Figure 4:
                    Visualisation 2
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Visualisation Design Evaluation
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    I believe that this is a useful visualisation for
                    exploration (as seen below). It is very clear to compare each of the values,
                    this is because position and length are the two most accurate visualisation
                    methods for comparison (Mackinlay, J., 1986), both of which are used here. This
                    makes it very easy to determine overall trends between each region over the
                    months. However, what is not as obvious is which bar represents each country,
                    while the legend is present, there are many more countries than I expected,
                    which makes it difficult to single out a colour and know which country it
                    represents, however, this is counteracted by the interactivity of the graph,
                    which tells you the bars region.
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Exploratory Process
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Primarily, exploration involved inspecting the overall
                    trends of the data. One this that stands out on this visualisation to me is the
                    USA- while it is expected that it remains in the top 5, due to its large
                    population, it’s surprising that the number of new cases each month rises up
                    and down so vastly. This behaviour should be explored with further questions.
                    Details of interaction are in the index.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Generated Questions and Refinements
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    I believe that such a large change in new cases each
                    month in the USA could be caused by a change in COVID law stringency. A
                    visualisation is provided below to answer the following question: "Does an
                    increase in strictness in COVID regulation effect the number of new cases in
                    the USA?” – Despite this relationship showing a correlation – I believe that it
                    is likely the stringency is high because the cases are high, rather than vice
                    versa. However, it is strange that the highest days are not located on the
                    highest stringency level – suggesting the government may have been acting too
                    slowly.
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "136.45pt", "margin-bottom": ".0001pt", "margin-left": "50.9pt", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": ".0001pt", "margin-left": "110.8pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={306} height={203} src={image012} vShapes="Picture_x0020_656" />
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt", "-webkit-text-align": "center", "text-align": "center" }}>
                    Figure 5:
                    Visualisation 2.1
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": ".0001pt", "margin-left": "-.25pt" }}>
                    However, despite this successful
                    exploration, it is obvious from this visualisation needs refinement – while it
                    does tell us which 5 countries had the most cases, it doesn’t represent which
                    countries had the greatest infection issues in this time period. A more refined
                    question would be “Which 5 countries had the most new cases each month per
                    100,000 people for the second half of the year 2021?” – This gives a highly
                    varied graph – proving that even smaller countries high infection rates when
                    compared to their population.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "3.85pt", "margin-left": "54.65pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={490} height={186} src={image014} vShapes="Picture_x0020_655" />
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "25.6pt", "margin-bottom": "8.75pt", "margin-left": ".5pt", "-webkit-text-align": "center", "text-align": "center", "line-height": "107%" }}>
                    Figure
                    6: Visualisation 2.2
                </p>
                <h1 style={{ "margin-left": "-.25pt" }}>
                    Question Three
                </h1>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                    “Did
                    vaccinations in the EU lower the number of deaths?”
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Visualisation Strategies
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    While the question seeks to explore the relationship
                    between the number of deaths and vaccinations, it must do this in regards to
                    the time passed. For this reason, a line graph with multiple lines will be used
                    to track the number of new deaths and the number of vaccinations over time. One
                    limitation of this visualisation is that plotting only a single graph for the
                    entirety of the European Union is unlikely to provide a full picture of whether
                    vaccinations have had a strong effect, as seen in visualisation 1, countries in
                    the EU had vastly different COVID experiences. In an attempt to see a bigger
                    picture, a subplot will be created for exploration, with representation for 4
                    randomly selected European countries, and representation for the EU as a whole.
                    A line graph was chosen above other time based visualisations due to both the
                    non-cyclical nature of the data – and the fact that the dataset covers a
                    non-divisible amount of time.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Fitness of Data
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    For this visualisation one of the more niche columns
                    in the dataset will be needed –“new deaths smoothed”. This data contains noise
                    reduction, so that a clear trend can be seen. One issue with the data fitness
                    is that the dates in the data set don’t perfectly fit into months, years, or
                    even weeks. This makes it difficult to fit all the data in the visualisation,
                    and therefore difficult to properly accurately represent the data. To solve
                    this, in my visualisation I used days passed, instead of months or years which
                    is standard in most time based line graphs.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Development Process
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Data Cleaning: The data cleaning process was simply
                    and quick. I simply selected the needed columns (region name, smoothed deaths,
                    the date and the total vaccinations) and then renamed the columns. NA values
                    for each of the five regions are removed.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Data Transformation: The initial data is then
                    transformed by sub setting the data needed for each of the subplots, then
                    omitting the NA values for each newly selected data frame. The values for each
                    region are then sorted by date. It does this using the “as.date” function,
                    which takes an argument of the string format of the dates in the data set, which
                    can then be used to translate them into date objects, which can be sorted using
                    the “order” function.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Data Visualisation: Each planned line graph (Germany,
                    France, Italy, Poland and the EU as a whole) is then plotted using a ggplot
                    with 2 geom lines. The x values calculated using the following
                    “as.numeric(row.names(DataFrame)” – this represents the dates as a days passed
                    integer value. A green line on each plot represents the total number of
                    vaccinations, and a red line represents the number of new deaths multiplied by
                    a coefficient (150000) to allow for better comparison of trends. The four
                    countries plots are placed into one subplot, and then placed into another with
                    the EU plot. This creates the 4:1 ratio as seen in the visualisation below. The
                    graphs are interactive, although the specific values on the lines are not as
                    important as the general trends visible.
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "7.9pt", "margin-left": "0cm", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "8.0pt", "margin-left": "0cm", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" style={{ "margin": "0cm", "margin-bottom": ".0001pt", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "23.3pt", "margin-bottom": "5.0pt", "margin-left": "0cm", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={601} height={264} src={image016} vShapes="Picture_x0020_785" />
                        {/*[endif]*/}
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "25.5pt", "margin-bottom": "8.75pt", "margin-left": ".5pt", "-webkit-text-align": "center", "text-align": "center", "line-height": "107%" }}>
                    Figure
                    7: Visualisation 3
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Visualisation Design Evaluation
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    This visualisation works well, the subplots allow for
                    clear inspection of the numerous relationships on display – however, one flaw
                    is the lack of axis and subplot titles. Due to sub plotting so many plots, the
                    titles and labels are removed, presumably to save space, but I do not know the
                    real reason. Screenshots of each of the visualisations outside of the subplot
                    can be found in the index (figures 10-15), with the titles and axis labels
                    present.
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Exploratory Process
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    The Exploration process is based around inspecting
                    the relationships between the two lines. The expected result was an inverse
                    correlation – as vaccines goes up, the number of new deaths goes down. However,
                    there is a pattern of lower peaks after vaccines have risen, so there does seem
                    to be a positive relationship, although weaker than expected.
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <h2 style={{ "margin-left": "-.25pt" }}>
                    Generated Questions and Refinements
                </h2>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": ".0001pt", "margin-left": "-.25pt" }}>
                    Despite the lack of a
                    relationship between vaccinations and deaths, there does seem to be a strong
                    relationship between time and new deaths, as all countries visualised above
                    seem to experience peaks and troughs of deaths at the same time. This generates
                    the question of “Is the number of COVID cases affected by the season?” – This
                    was answered by plotting the new deaths of southern hemisphere
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                    against the north – there is a pattern, with
                    southern regions all peaking slightly later – indicating that COVID-19 is
                    likely seasonal.
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "6.25pt", "margin-left": "60.6pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={445} height={215} src={image018} vShapes="Picture_x0020_868" />
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "25.65pt", "margin-bottom": "8.75pt", "margin-left": ".5pt", "-webkit-text-align": "center", "text-align": "center", "line-height": "107%" }}>
                    Figure
                    8: Visualisation 3.1
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "10.0pt", "margin-left": "-.75pt", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 206.0pt" }}>
                    WORDS: 2842
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                    <span style={{ "mso-tab-count": "1" }}>

                    </span>
                    PAGES:
                    7 (Not including index/bibliography)
                </p>
                <h1 style={{ "margin-left": "-.25pt" }}>
                    Index
                </h1>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "5.9pt", "margin-left": "0cm", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "5.6pt", "margin-left": "0cm", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={634} height={213} src={image020} vShapes="Picture_x0020_921" />
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "5.95pt", "margin-left": "-.75pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 36.0pt 72.0pt 233.4pt" }}>
                    Figure 9: Interaction based exploration
                    of visualisation 2
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "41.75pt", "margin-bottom": "5.6pt", "margin-left": "0cm", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={552} height={260} src={image022} vShapes="Picture_x0020_923" />
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "5.9pt", "margin-left": "-.75pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 36.0pt 72.0pt 243.75pt" }}>
                    Figure 10: New Deaths &amp;
                    Vaccinations over Time in Germany
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "45.5pt", "margin-bottom": "5.6pt", "margin-left": "0cm", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={542} height={255} src={image024} vShapes="Picture_x0020_925" />
                        {/*[endif]*/}
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "8.0pt", "margin-left": "-.75pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 36.0pt 72.0pt 238.35pt" }}>
                    Figure 11: New Deaths &amp;
                    Vaccinations over Time in France
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "5.7pt", "margin-left": "0cm", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "41.15pt", "margin-bottom": "5.75pt", "margin-left": "0cm", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={554} height={261} src={image026} vShapes="Picture_x0020_945" />
                        {/*[endif]*/}
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "5.85pt", "margin-left": "-.75pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 36.0pt 72.0pt 232.85pt" }}>
                    Figure 12: New Deaths &amp;
                    Vaccinations over Time in Italy
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "49.9pt", "margin-bottom": "5.6pt", "margin-left": "0cm", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={565} height={266} src={image028} vShapes="Picture_x0020_969" />
                        {/*[endif]*/}
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "5.9pt", "margin-left": "-.75pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 36.0pt 72.0pt 238.65pt" }}>
                    Figure 13: New Deaths &amp;
                    Vaccinations over Time in Poland
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "50.75pt", "margin-bottom": "5.6pt", "margin-left": "0cm", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={528} height={248} src={image030} vShapes="Picture_x0020_971" />
                        {/*[endif]*/}
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": ".05pt", "margin-left": "-.75pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 36.0pt 72.0pt 238.3pt" }}>
                    Figure 14: New Deaths &amp;
                    Vaccinations over Time in the EU
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "43.1pt", "margin-bottom": "5.75pt", "margin-left": "0cm", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={549} height={294} src={image032} vShapes="Picture_x0020_989" />
                        {/*[endif]*/}
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "8.0pt", "margin-left": "-.75pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 36.0pt 72.0pt 221.95pt" }}>
                    Figure 15: Variations in COVID
                    Variables in Ecuador
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "23.2pt", "margin-bottom": "5.8pt", "margin-left": "0cm", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "44.75pt", "margin-bottom": "5.6pt", "margin-left": "0cm", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-no-proof": "yes" }}>
                        <img alt="" width={544} height={274} src={image034} vShapes="Picture_x0020_999" />
                        {/*[endif]*/}
                    </span>
                </p>
                <p className="MsoNormal" align="center" style={{ "margin-top": "0cm", "margin-right": "0cm", "margin-bottom": "10.1pt", "margin-left": "-.75pt", "-webkit-text-align": "center", "text-align": "center", "-webkit-text-indent": "0cm", "text-indent": "0cm", "tab-stops": "center 36.0pt 72.0pt 208.7pt" }}>
                    Figure 16: Variations COVID Variables
                    in Peru
                </p>
                <h1 style={{ "margin-left": "-.25pt" }}>
                    Bibliography
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </h1>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Hasell, J., Mathieu, E., Beltekian, D. et al. A
                    cross-country database of COVID-19 testing. Sci Data 7, 345 (2020).
                    https://doi.org/10.1038/s41597-020-00688-8
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Mathieu, E., Ritchie, H., Ortiz-Ospina, E. et al. A
                    global database of COVID-19 vaccinations. Nat Hum Behav (2021).
                    https://doi.org/10.1038/s41562-021-01122-8
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": ".05pt", "margin-left": "-.25pt" }}>
                    GitHub. 2022. covid-19-data/public/data at master ·
                    owid/covid-19-data. [online] Available at:
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    &lt;https://github.com/owid/covid-19-data/tree/master/public/data&gt;
                    [Accessed 21 March 2022].
                </p>
                <p className="MsoNormal" style={{ "margin-top": "0cm", "margin-right": "25.3pt", "margin-bottom": "8.0pt", "margin-left": "-.25pt" }}>
                    Mackinlay, J., 1986. Automating the design of
                    graphical presentations of relational information. ACM Transactions on
                    Graphics, 5(2), pp.110-141.
                </p>
                <p className="MsoNormal" style={{ "margin": "0cm", "margin-bottom": ".0001pt", "-webkit-text-indent": "0cm", "text-indent": "0cm", "line-height": "107%" }}>
                    <span style={{ "mso-spacerun": "yes" }}>

                    </span>
                </p>
            </div>
        </div>
    );
}
export default CovidR