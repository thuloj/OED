/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as moment from 'moment';
import { connect } from 'react-redux';
import UIOptionsComponent from '../components/UIOptionsComponent';
import { changeBarDuration, changeBarStacking, changeCompareGraph } from '../actions/graph';
import { Dispatch } from '../types/redux/actions';
import { State } from '../types/redux/state';
import { ComparePeriod} from '../utils/calculateCompare';


function mapStateToProps(state: State) {
	return {
		chartToRender: state.graph.chartToRender,
		barStacking: state.graph.barStacking,
		barDuration: state.graph.barDuration,
		comparePeriod: state.graph.comparePeriod,
		sortingOrder: state.graph.sortingOrder
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		changeDuration: (barDuration: moment.Duration) => dispatch(changeBarDuration(barDuration)),
		changeBarStacking: () => dispatch(changeBarStacking()),
		changeCompareGraph: (comparePeriod: ComparePeriod) => dispatch(changeCompareGraph(comparePeriod))
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(UIOptionsComponent);
