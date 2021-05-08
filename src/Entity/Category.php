<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CategoryRepository::class)
 */
class Category
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdtime;

    /**
     * @ORM\Column(type="datetime")
     */
    private $modifiedtime;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedtime(): ?\DateTimeInterface
    {
        return $this->createdtime;
    }

    public function setCreatedtime(\DateTimeInterface $createdtime): self
    {
        $this->createdtime = $createdtime;

        return $this;
    }

    public function getModifiedtime(): ?\DateTimeInterface
    {
        return $this->modifiedtime;
    }

    public function setModifiedtime(\DateTimeInterface $modifiedtime): self
    {
        $this->modifiedtime = $modifiedtime;

        return $this;
    }
}
