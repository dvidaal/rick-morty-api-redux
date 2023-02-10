import styled from "styled-components";

const CharacterStyled = styled.div`
  .character-card {
    width: 300px;
    height: 450px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #3b3b3b;
    border-radius: 25px 25px;
    line-height: 1.5;
    color: white;
    padding-right: 0;

    &__info {
      padding-left: 15px;
    }

    &__image {
      border-radius: 25px 25px 0 0;
    }

    &__title-characters--smallTitle {
      font-size: 20px;
    }
  }

  h2 {
    padding-left: 25px;
    padding-top: 15px;
  }

  .characterCard__info--specie {
    font-size: 25px;
    padding-left: 25px;
  }

  .characterCard__info--status {
    font-size: 20px;
    padding-left: 25px;
  }
`;

export default CharacterStyled;
