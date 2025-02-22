import { formatNearAmount } from 'near-api-js/lib/utils/format';
import React from 'react';
import { Translate } from 'react-localize-redux';
import styled from 'styled-components';

import CONFIG from '../../../config';
import ArrowUpRight from '../..//svg/ArrowUpRight';
import Balance from '../../common/balance/Balance';

const StyledContainer = styled.div`
    background-color: #fafafa;
    border-radius: 8px;
    padding: 16px;
    color: #72727a;
    margin: 50px 0 -20px 0;

    .contract-wrapper {
        border-bottom: 1px solid #f0f0f1;
        padding-bottom: 16px;
        a {
            display: flex;
            align-items: center;

            svg {
                margin-left: 5px;
            }
        }
    }

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        color: #272729;
    }

    .title {
        font-weight: 600;
    }
`;

export default ({ contractId, contractIdUrl }) => (
    <StyledContainer>
        {contractId && (
            <div className='contract-wrapper'>
                <div className='title'>Contract</div>
                <a href={contractIdUrl} target='_blank' rel='noreferrer'>
                    {contractId}
                    <ArrowUpRight />
                </a>
            </div>
        )}
        <div>
            <div className='title'>
                <Translate id='login.v2.connectConfirm.feeAllowance.title' />
            </div>
            <Balance amount={CONFIG.ACCESS_KEY_FUNDING_AMOUNT} showBalanceInUSD={false} />
        </div>
        <Translate
            id='login.v2.connectConfirm.feeAllowance.desc'
            data={{ amount: formatNearAmount(CONFIG.ACCESS_KEY_FUNDING_AMOUNT) }}
        />
    </StyledContainer>
);
