"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Game = () => {
  const emojis = ["🚀", "🎮", "💻", "🌟", "🔥", "⚡", "🎯", "🏆"];
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (matched.length === emojis.length * 2 && cards.length > 0) {
      setGameWon(true);
    }
  }, [matched, cards.length]);

  const initializeGame = () => {
    const gameCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        flipped: false,
      }));
    setCards(gameCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
  };

  const handleCardClick = (id) => {
    if (
      flipped.includes(id) ||
      matched.includes(id) ||
      flipped.length === 2 ||
      gameWon
    ) {
      return;
    }

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;

      if (
        cards[first].emoji === cards[second].emoji &&
        first !== second
      ) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  return (
    <section className={`relative w-full mx-auto sm:px-16 px-6 py-16`}>
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`${styles.sectionHeadText} mb-4`}>
            Memory Game
          </h2>
          <p className="text-secondary text-[16px] leading-[30px]">
            Test your memory skills! Match all pairs to win 🎮
          </p>
        </motion.div>

        {/* Game Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-around items-center mb-8 p-4 bg-tertiary rounded-lg"
        >
          <div className="text-center">
            <p className="text-secondary text-sm mb-1">Moves</p>
            <p className="text-white font-bold text-2xl">{moves}</p>
          </div>
          <div className="text-center">
            <p className="text-secondary text-sm mb-1">Matched</p>
            <p className="text-white font-bold text-2xl">{matched.length / 2}/8</p>
          </div>
          <div className="text-center">
            <p className="text-secondary text-sm mb-1">Status</p>
            <p className={`font-bold text-lg ${gameWon ? 'text-green-400' : 'text-yellow-400'}`}>
              {gameWon ? "Won! 🎉" : "Playing"}
            </p>
          </div>
        </motion.div>

        {/* Game Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-4 gap-3 mb-8 max-w-md mx-auto"
        >
          {cards.map((card) => (
            <motion.button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`aspect-square rounded-lg font-bold text-4xl sm:text-3xl transition-all duration-300 ${
                flipped.includes(card.id) || matched.includes(card.id)
                  ? "bg-gradient-to-br from-purple-600 to-cyan-600 text-white"
                  : "bg-tertiary text-gray-400 hover:bg-opacity-80"
              } ${matched.includes(card.id) ? "opacity-60" : ""}`}
            >
              <motion.span
                key={`${card.id}-${flipped.includes(card.id)}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {flipped.includes(card.id) || matched.includes(card.id)
                  ? card.emoji
                  : "?"}
              </motion.span>
            </motion.button>
          ))}
        </motion.div>

        {/* Reset Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={initializeGame}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-80 transition-opacity duration-300"
          >
            {gameWon ? "Play Again" : "Reset Game"}
          </button>
        </motion.div>

        {/* Win Message */}
        {gameWon && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-6 p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg"
          >
            <p className="text-white font-bold text-lg">
              🎉 Congratulations! You won in {moves} moves! 🎉
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Game;
