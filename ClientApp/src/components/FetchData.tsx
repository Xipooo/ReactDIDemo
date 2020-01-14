import * as React from 'react';
import { WeatherForecastsState } from '../store/WeatherForecasts';
import { resolve } from 'inversify-react';
import { CachedWeatherService } from '../services/CachedWeatherService';
import Forecast from './Forecast';
import { RouteComponentProps } from 'react-router';

export default class FetchData extends React.Component<RouteComponentProps<any>, WeatherForecastsState> {

  @resolve(CachedWeatherService)
  private weatherService!: CachedWeatherService;

  constructor(props: any) {
    super(props);
    this.state = { startDateIndex: 0, forecasts: [], isLoading: false };
  }

  public componentDidMount() {
    this.ensureDataFetched();
  }

  public componentDidUpdate(prevProps: any, prevState: WeatherForecastsState) {
    const startDateIndex = this.props.match.params.startDateIndex || 0;
    if (startDateIndex && this.state.startDateIndex != startDateIndex) {
      this.ensureDataFetched();
    }
  }

  private ensureDataFetched() {
    this.weatherService.getWeather().then(data => data.json()).then(json => this.setState({ forecasts: json, startDateIndex: parseInt(this.props.match.params.startDateIndex) }));
  }

  public render() {
    return <Forecast {...this.state} />
  }
}