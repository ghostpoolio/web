import React, { Component } from 'react';
import styled from 'styled-components';

import ContentCard from 'components/ContentCard';

const StakingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class Staking extends Component {
  render() {
    return (
      <StakingContainer>
        <ContentCard>
          <h1>What is Staking?</h1>
          <p>
            Staking is committing your ETH to secure the network and validate
            transactions. For every valid block validated, (the first - to
            confirm) validator gets a block reward. All the transactions are
            then broadcasted to every node on the Ethereum network.
          </p>
        </ContentCard>
        <ContentCard>
          <h1>Why Proof of Stake?</h1>
          <p>
            For two reasons: environmental cost and to make block rewards more
            fairly distributed. Presently, Proof-of-Work (PoW) creates economies
            of scale, where a dollar invested returns more than a dollar. In
            Proof-of-Stake, a dollar invested
          </p>
        </ContentCard>
        <ContentCard>
          <h1>What are my rewards?</h1>
          <p>
            Block rewards and block penalties are not finalised yet. From
            current research and publication, the reward will be 1.5-6% per
            annum.
          </p>
        </ContentCard>
        <ContentCard>
          <h1>What is a validator?</h1>
          <p>
            A validator is akin to a miner in a PoW system; they confirm
            transactions and distribute this information to every node in the
            network. A validator is created by locking up an ETH deposit of 1000
            ETH.
          </p>
        </ContentCard>
        <ContentCard>
          <h1>What is a validator pool?</h1>
          <p>
            A validator pool is when people pool their ETH together to become a
            validator.
          </p>
        </ContentCard>
      </StakingContainer>
    );
  }
}

export default Staking;
