import { useState, useEffect } from "react";
import { questions } from "../data/questions";
import "./Game.scss";

const getSuggestions = (questions: any[], input: string) => {
    const allNames = questions.map(q => q.name.toLowerCase());
    const escapedInput = input.toLowerCase().replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(escapedInput, 'i');
    
    return allNames
        .filter(name => regex.test(name))
        .sort()
        .slice(0, 5);
};

const Game = () => {
    const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [hintIndex, setHintIndex] = useState(0);
    const [blurLevel, setBlurLevel] = useState(10);
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState("");
    const [showHints, setShowHints] = useState<string[]>([]);
    const [roundsCompleted, setRoundsCompleted] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [totalHintsUsed, setTotalHintsUsed] = useState(0);
    const [isRoundFinished, setIsRoundFinished] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const totalRounds = 2;
    const question = shuffledQuestions[currentQuestionIndex] || { name: '', image: '', hints: [] };
    const maxHints = question.hints.length;

    useEffect(() => {
        if (shuffledQuestions.length === 0) {
            const newShuffled = [...questions].sort(() => Math.random() - 0.5);
            setShuffledQuestions(newShuffled);
        }
    }, [shuffledQuestions.length]);

    useEffect(() => {
        if (answer.length > 1) {
            setSuggestions(getSuggestions(shuffledQuestions, answer));
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    }, [answer, shuffledQuestions]);

    const calculateScore = () => Math.max(1, 11 - (hintIndex + 1));

    const handleCheckAnswer = () => {
        if (answer.trim().toLowerCase() === question.name.toLowerCase()) {
            const points = calculateScore();
            setScore(prev => prev + points);
            setCorrectAnswers(prev => prev + 1);
            setMessage(`Parabéns! +${points} pontos. Resposta: ${question.name}`);
            setBlurLevel(10 - hintIndex);
            setShowImage(true);
            setIsRoundFinished(true);
        } else if (hintIndex < maxHints - 1) {
            handleNextHint();
        }
    };

    const handleNextHint = () => {
        const newHintIndex = hintIndex + 1;
        setHintIndex(newHintIndex);
        setShowHints(prev => [...prev, question.hints[newHintIndex]]);
        setTotalHintsUsed(prev => prev + 1);
        setBlurLevel(10 - newHintIndex);
    };

    const handleGiveUp = () => {
        setMessage(`Resposta: ${question.name} (0 pontos)`);
        setShowImage(true);
        setIsRoundFinished(true);
        setBlurLevel(0);
        setHintIndex(maxHints);
    };

    const handleNext = () => {
        if (roundsCompleted < totalRounds - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setIsRoundFinished(false);
            setShowHints([]);
            setAnswer("");
            setHintIndex(0);
            setBlurLevel(10);
            setMessage("");
            setRoundsCompleted(prev => prev + 1);
            setShowImage(false);
        } else {
            setGameOver(true);
        }
    };

    const handleRestartGame = () => {
        const newShuffled = [...questions].sort(() => Math.random() - 0.5);
        setShuffledQuestions(newShuffled);
        setCurrentQuestionIndex(0);
        setHintIndex(0);
        setBlurLevel(10);
        setAnswer("");
        setScore(0);
        setMessage("");
        setShowHints([]);
        setRoundsCompleted(0);
        setGameOver(false);
        setCorrectAnswers(0);
        setTotalHintsUsed(0);
        setIsRoundFinished(false);
        setShowImage(false);
    };

    const handleSuggestionClick = (name: string) => {
        setAnswer(name);
        setShowSuggestions(false);
    };

    return (
        <div className="game-container">
            {gameOver ? (
                <div className="game-over">
                    <h2>Fim de Jogo!</h2>
                    <p>Pontuação final: {score}</p>
                    <p>Acertos: {correctAnswers}</p>
                    <p>Dicas usadas: {totalHintsUsed}</p>
                    <button onClick={handleRestartGame}>Reiniciar Jogo</button>
                </div>
            ) : (
                shuffledQuestions.length > 0 && (
                    <>
                        <div className="image-container">
                            <img
                                src={question.image}
                                alt="Pessoa misteriosa"
                                style={{ filter: showImage ? "none" : `blur(${blurLevel}px)` }}
                            />
                        </div>

                        <div className="game-content">
                            <div className="hints">
                                {showHints.map((hint, index) => (
                                    <p key={index}>{hint}</p>
                                ))}
                            </div>

                            {hintIndex >= 0 && (
                                <div className="hint">
                                    <p>{question.hints[hintIndex]}</p>
                                </div>
                            )}

                            <div className="input-container">
                                <div className="autocomplete">
                                    <input
                                        type="text"
                                        placeholder="Digite o nome da pessoa"
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                                        onFocus={() => setShowSuggestions(answer.length > 1)}
                                    />
                                    {showSuggestions && suggestions.length > 0 && (
                                        <div className="suggestions">
                                            {suggestions.map((name, index) => (
                                                <div
                                                    key={index}
                                                    className="suggestion-item"
                                                    onMouseDown={() => handleSuggestionClick(name)}
                                                >
                                                    {name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <button onClick={handleCheckAnswer}>Verificar Resposta</button>
                            </div>

                            {message && <p className={`message ${message.includes('Parabéns') ? 'success' : 'error'}`}>{message}</p>}

                            {hintIndex < maxHints - 1 && (
                                <button className="hint-button" onClick={handleNextHint}>
                                    Próxima Dica ({maxHints - hintIndex - 1} restantes)
                                </button>
                            )}

                            {hintIndex === maxHints - 1 && !isRoundFinished && (
                                <button className="give-up-button" onClick={handleGiveUp}>
                                    Não Sei a Resposta (0 pontos)
                                </button>
                            )}

                            {isRoundFinished && (
                                <div className="overlay">
                                    <div className="result-popup">
                                        <h3>Resultado da Rodada</h3>
                                        <p>{message}</p>
                                        <img
                                            src={question.image}
                                            alt="Pessoa misteriosa"
                                            style={{ filter: "none" }}
                                        />
                                        <button
                                            className="next-button"
                                            onClick={handleNext}
                                        >
                                            {roundsCompleted < totalRounds - 1 ? "Próxima Rodada" : "Ver Resultado Final"}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )
            )}
        </div>
    );
};

export default Game;