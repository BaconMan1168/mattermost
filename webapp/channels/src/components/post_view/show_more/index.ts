// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getIsRhsExpanded, getIsRhsOpen} from 'selectors/rhs';

import type {GlobalState} from 'types/store';

import ShowMore from './show_more';

function mapStateToProps(state: GlobalState) {
    return {
        isRHSExpanded: getIsRhsExpanded(state),
        isRHSOpen: getIsRhsOpen(state),
    };
}

export default connect(mapStateToProps)(ShowMore);
