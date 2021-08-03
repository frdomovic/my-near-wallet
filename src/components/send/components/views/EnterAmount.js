import React from 'react';
import { Translate } from 'react-localize-redux';
import styled from 'styled-components';

import FormButton from '../../../common/FormButton';
import NEARBalanceInUSDWrapper from '../../../common/near_usd/NEARBalanceInUSDWrapper';
import AmountInput from '../AmountInput';
import BalanceDetails from '../BalanceDetails';
import SelectTokenButton from '../SelectTokenButton';
import TabSelector from '../TabSelector';

const StyledContainer = styled.form`
    &&& {
        > button {
            &.light-blue {
                margin: 0 auto;
                display: block;
            }
        }

        .amount-input-wrapper {
            margin: 55px 0px 15px;
            height: 74px;
            display: flex;
            align-items: center;
        }

        .usd-amount {
            text-align: center;
            margin-bottom: 20px;
            margin-top: -5px;
            color: #A2A2A8;
        }

        .select-token-btn {
            margin: 55px 0 5px 0;
        }
    }
`;

const EnterAmount = ({ 
    amount,
    rawAmount,
    onChangeAmount,
    onSetMaxAmount,
    availableToSend,
    availableBalance,
    reservedForFees,
    continueAllowed,
    onContinue,
    onClickCancel,
    selectedToken,
    onClickSelectToken,
    error,
    isMobile
}) => {

    return (
        <StyledContainer 
            className='buttons-bottom'
            onSubmit={(e) => {onContinue(e); e.preventDefault();}}
            novalidate
        >
            <TabSelector/>
            <div className='amount-input-wrapper'>
                <AmountInput
                    value={amount}
                    onChange={onChangeAmount}
                    error={error}
                    autoFocus={!isMobile}
                />
            </div>
            {selectedToken.symbol === 'NEAR' &&
                <div className='usd-amount'>
                    <NEARBalanceInUSDWrapper amount={rawAmount}/>
                </div>
            }
            <FormButton
                onClick={onSetMaxAmount}
                type='button'
                color='light-blue'
                className='small rounded'
            >
                <Translate id='button.useMax'/>
            </FormButton>
            <SelectTokenButton
                token={selectedToken}
                onClick={onClickSelectToken}
            />
            <BalanceDetails
                availableToSend={availableToSend}
                availableBalance={availableBalance}
                reservedForFees={reservedForFees}
                selectedToken={selectedToken}
            />
            <div className='buttons-bottom-buttons'>
                {/* TODO: Add error state */}
                <FormButton
                    type='submit'
                    disabled={!continueAllowed}
                >
                    <Translate id='button.continue'/>
                </FormButton>
                <FormButton
                    type='button'
                    onClick={onClickCancel}
                    className='link'
                    color='gray'
                >
                    <Translate id='button.cancel'/>
                </FormButton>
            </div>
        </StyledContainer>
    );
};

export default EnterAmount;